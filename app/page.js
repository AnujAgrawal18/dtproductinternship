"use client"
import { useState, useEffect } from "react";


export default function Home() {
  const [board, setboard] = useState(true)
  const [data, setdata] = useState({})
  const [assets, setassets] = useState([])

  const getdata = async () => {
    let a = await fetch("/api/data")
    let b = await a.json();
    setdata(b.tasks[0]);
    setassets(b.tasks[0].assets);
  }

  useEffect(() => {
    getdata();
  }, [])




  return (
    <div class="">
      <nav class="bg-gray-200 shadow-md h-[90px]">
        <div class="flex justify-between items-center h-[90px] mx-[83px]">
          <div class="flex items-center space-x-2">
            <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="Logo" class="w-[311px] h-[49px] top-[20px] rounded-full" />
          </div>

          <div class="flex items-center space-x-6">
            <img src="https://cdn-icons-png.flaticon.com/128/5974/5974636.png" alt="" class=" h-[35px] w-[35px] rounded-full" />

            <div className="bg-[#3683F0] rounded-full h-[35px] w-[35px]"><img src="https://cdn-icons-png.flaticon.com/128/5632/5632549.png" alt="" class="h-[30px] w-[30px] invert m-[2px]" /></div>

            <div className="bg-[#3683F0] rounded-full h-[35px] w-[35px]"><img src="https://cdn-icons-png.flaticon.com/128/1827/1827347.png" alt="" class="h-[26px] w-[28px] invert mx-[2px] my-[3px]" /></div>

            <div class="relative">
              <img src="https://s3-alpha-sig.figma.com/img/7ac8/5301/b9bfc59f733c9f17f2bede82c41154f1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D30iFngPc1H-cDRh76JLv4rfizbZCtSaxLb7fIG092KN2Hy0PaUInLeDjbZ3YEnxAwe3GkTWRMcf06qVrkMtqEGS1qtCIFiJoizSmRpcao0JSZnmNSSkDxQwhLIcEtPxqOoVMLFjUBLw2Ttoyu3xvs6~8BOYJrPY7QpxzqwGoTjjTDXUNCR8NKUCZSO6guXxyk4cu~jW1onOaQ0cC014taWHe~uGrlGEjdkB1UXgNaSHlXYgJxlHjunPtzrZGySB7wXhYskeS0TclbpXD0G18uqtRlMQ1kpCZrdefUtVs32hRElWS91-nJh8ILB4Dy2AAa0MZ4UxnmGC7jEKYP5xng__" alt="User Profile" class="h-[37px] w-[37px] rounded-full" />
            </div>

            <img src="https://cdn-icons-png.flaticon.com/128/512/512142.png" alt="" className="w-[20px] h-[30px] mr-[110px] rotate-90" />

          </div>
        </div>
      </nav>

      <header class="mb-10 top-[108px] w-[1096px] mx-auto mt-[20px]">
        <div class="flex justify-between align-left mb-[20px]">
          <p className=" leading-[42px] tracking-[0.02em] font-[700] text-[28px] text-[#0029FF]">Technical Project Management</p>
          <div className="w-[121px] h-[36px] rounded-[10px] bg-[#0029FF] text-white text-[12px] p-2 text-center">Submit Task</div>
        </div>
        <div className="h-[135px] top-[187px] left-[187px] border-[5px_0px_0px_0px] bg-[#E9ECEF] py-6 px-[27px]">
          <p class="text-[20px] leading-[30px] tracking-[2%] font-[700]">{data.task_title}</p>
          <p class="text-[14px] mt-2 leading-[21px] tracking-[2%] font-[400]">{data.task_description}</p>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[1096px] mx-auto my-[20px]">

        {assets.slice(0, 1).map((a) => {
          return (
            <div class="bg-[#FDFDFD] rounded-[15px] w-[500px] h-[600px] shadow-[0px_2px_5px_4px_#00000040] ">
              <div class="text-[16px] font-[600] bg-black text-white h-[50px] rounded-t-[15px] flex justify-between items-center">
                <p className="mx-auto">{a.asset_title}</p>
                <img src="https://cdn-icons-png.flaticon.com/128/471/471713.png" alt="" className="invert h-[25px] w-[25px] mr-5" /></div>
              <p class="text-black px-4 pt-4 h-[90px] shadow-[0px_2px_3px_0px_#00000040]"><span className="font-[600] text-[16px]">Description: </span><span className="text-[15px]">{a.asset_description}</span></p>
              <div class="aspect-w-16 aspect-h-9">
                {/* <img src="https://s3-alpha-sig.figma.com/img/f0ce/9cbc/d249ba0bf29d70044ae2a5bb2114b8ff?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OATskz9lW6z3K6UO-V2BRd52VCzFyO6p1KOUCBXjSPjy7cvMgEKN50SHNevjS1zelEn5EGlZJjN0zIUM9eTBn7tHa6n-cBLyA~p5EAhP5ofGqHMGm4bzyzRXT9-XFNVZ8DXYpabOEeN95hZWHnsFmMyIXFy4AQ5gIwzU0jQHIoAZCsuMvtwTxBLJwWgZQSpGzYNoKNuoK1EvMi~gGVRBMWwm2j4AowEMfczxpf3azffLB3R~zLJKkqjjkku-uBiTPdNimqfWMg1SJCrrvrBqkrrNTXpgsPm31NXXM0RrwSBhNbY26v9k-vo0rGQDqowCe9OXmZ~SCFJSxL1em3gjiw__" alt="" /> */}
                <iframe class="w-full h-[400px] rounded-md" src={a.asset_content} frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          )
        })}


        {assets.slice(1, 2).map((a) => {
          return (
            <div class="bg-[#FDFDFD] rounded-[15px] w-[500px] h-[600px] shadow-[0px_2px_5px_4px_#00000040] ">
              <div class="text-[16px] font-[600] bg-black text-white h-[50px] rounded-t-[15px] flex justify-between items-center">
                <p className="mx-auto">{a.asset_title}</p>
                <img src="https://cdn-icons-png.flaticon.com/128/471/471713.png" alt="" className="invert h-[25px] w-[25px] mr-5" /></div>
              <div class="text-black px-4 pt-4 h-[90px] shadow-[0px_2px_3px_0px_#00000040]"><span className="font-[600] text-[16px] ">Description: </span><span className="text-[15px]">{a.asset_description}</span></div>
              <div className="bg-[#FEFFC033] h-[40px] flex items-center">
                <img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" className="h-[25px] w-[30px] ml-5 rotate-180" alt="" />
                <p className="font-[700] text-[20px] leading-[28px] mx-[100px]">Thread A</p>
              </div>
              <form class="space-y-4">
                <div className="flex justify-evenly">
                  <div className="h-[95px] rounded-[10px] shadow-[0px_2px_3px_2px_#00000040] bg-[#0000000D] w-full m-5">
                    <div className="h-[30px] px-2 py-[2px] rounded-[10px]">Sub Thread 1</div>
                    <textarea type="text" placeholder="Enter Text Here" id="thread" class="w-full h-[64px] p-2 rounded-[10px] focus:ring resize-none" />
                  </div>
                  <div className="h-[95px] rounded-[10px] shadow-[0px_2px_3px_2px_#00000040] bg-[#0000000D] w-full m-5">
                    <div className="h-[30px] px-2 py-[2px] rounded-[10px]">Sub Thread 1</div>
                    <textarea type="text" placeholder="Enter Text Here" id="thread" class="w-full h-[64px] p-2 rounded-[10px] focus:ring resize-none" />
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <div className="mx-5">
                    <svg width="120" height="20" viewBox="0 0 118 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.2236 19C4.2236 19.5 4.64596 20 5.2795 20H9.50311C10.1366 20 10.559 19.5 10.559 19V18H4.2236V19ZM7.3913 0C3.27329 0 0 3.1 0 7C0 9.4 1.26708 11.5 3.1677 12.7V15C3.1677 15.5 3.59006 16 4.2236 16H10.559C11.1925 16 11.6149 15.5 11.6149 15V12.7C13.5155 11.4 14.7826 9.3 14.7826 7C14.7826 3.1 11.5093 0 7.3913 0Z" fill="#323232" />
                      <path d="M49.7727 2C49.7727 0.9 48.8382 0 47.6832 0H30.8832C29.7282 0 28.7832 0.9 28.7832 2V14C28.7832 15.1 29.7282 16 30.8832 16H45.5832L49.7832 20L49.7727 2ZM45.5832 12H32.9832V10H45.5832V12ZM45.5832 9H32.9832V7H45.5832V9ZM45.5832 6H32.9832V4H45.5832V6Z" fill="#323232" />
                      <path d="M82.4499 0H66.1165C64.8215 0 63.7832 0.857143 63.7832 1.90476V15.2381C63.7832 16.2857 64.8215 17.1429 66.1165 17.1429H70.7832L74.2832 20L77.7832 17.1429H82.4499C83.7332 17.1429 84.7832 16.2857 84.7832 15.2381V1.90476C84.7832 0.857143 83.7332 0 82.4499 0ZM75.4499 15.2381H73.1165V13.3333H75.4499V15.2381ZM77.8649 7.85714L76.8148 8.73338C75.9748 9.42861 75.4499 10 75.4499 11.4286H73.1165V10.9524C73.1165 9.90476 73.6414 8.95242 74.4814 8.25718L75.9281 7.05718C76.3598 6.71432 76.6165 6.2381 76.6165 5.71429C76.6165 4.66667 75.5665 3.80952 74.2832 3.80952C72.9999 3.80952 71.9499 4.66667 71.9499 5.71429H69.6165C69.6165 3.60952 71.7049 1.90476 74.2832 1.90476C76.8615 1.90476 78.9499 3.60952 78.9499 5.71429C78.9499 6.55238 78.5299 7.31429 77.8649 7.85714Z" fill="#323232" />
                      <path d="M111.404 7.867C111.236 5.356 110.179 2.908 108.195 1C106.193 2.926 105.089 5.374 104.874 7.867C106.071 8.479 107.175 9.27101 108.139 10.234C109.103 9.28001 110.207 8.488 111.404 7.867ZM105.323 10.252C105.192 10.162 105.042 10.081 104.902 9.99099C105.042 10.09 105.192 10.162 105.323 10.252ZM111.329 10.027C111.208 10.108 111.077 10.171 110.955 10.261C111.077 10.171 111.208 10.108 111.329 10.027ZM108.139 13.105C106.128 10.153 102.694 8.2 98.7832 8.2C98.7832 12.988 101.927 17.038 106.296 18.541C106.885 18.748 107.503 18.901 108.139 19C108.775 18.892 109.384 18.739 109.982 18.541C114.351 17.038 117.495 12.988 117.495 8.2C113.584 8.2 110.15 10.153 108.139 13.105Z" fill="#323232" />
                    </svg>
                  </div>
                  <div className="flex h-[34px] w-[95px] rounded-[10px] shadow-[0px_2px_3px_2px_#00000040] justify-center items-center mr-3"><p className="font-[600] text-[12px]">Select Categ </p><img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" className="h-[15px] w-[15px]" alt="" /></div>
                  <div className="flex h-[34px] w-[100px] rounded-[10px] shadow-[0px_2px_3px_2px_#00000040] justify-center items-center mr-5"><p className="font-[600] text-[12px]">Select Proces </p><img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" className="h-[15px] w-[15px]" alt="" /></div>
                </div>
                <div type="submit" class="w-[110px] h-[42px] bg-[#0029FF] text-white text-[14px] font-[500] p-2 rounded-[10px] hover:bg-blue-700 transition m-5">+ Sub-Thread</div>
                <div className="h-[120px] rounded-[10px] shadow-[0px_2px_3px_2px_#00000040] bg-[#0000000D] mx-5">
                  <div className="h-[35px] px-2 py-[2px] rounded-[10px]">Summary for Thread A</div>
                  <textarea type="text" placeholder="Enter Text Here" id="thread" class="w-full h-[84px] p-2 rounded-[10px] focus:ring resize-none" />
                </div>
              </form>
            </div>
          )
        })}
        {assets.slice(2, 3).map((a) => {
          return (
            <div class="bg-[#FDFDFD] rounded-[15px] w-[500px] h-[600px] shadow-[0px_2px_5px_4px_#00000040] ">
              <div class="text-[16px] font-[600] bg-black text-white h-[50px] rounded-t-[15px] flex justify-between items-center">
                <p className="mx-auto">{a.asset_title}</p>
                <img src="https://cdn-icons-png.flaticon.com/128/471/471713.png" alt="" className="invert h-[25px] w-[25px] mr-5" /></div>
              <p class="text-black px-4 pt-4 h-[90px] shadow-[0px_2px_3px_0px_#00000040]"><span className="font-[600] text-[16px]">Description: </span><span className="text-[15px]">{a.asset_description}</span></p>
              <form class="mx-[35px] mt-[30px]">
                <div className="">
                  <label class="block text-[18px] font-[600]" for="title">Title</label>
                  <input type="text" id="title" class="w-full mt-3 p-2 rounded-[5px] h-[50px] focus:ring bg-[#FCFBFB] shadow-[0px_2px_3px_0px_#00000040]" />
                </div>
                <div className="mt-6">
                  <label class="block text-[18px] font-[600] " for="content">Content</label>
                  <div className="h-[90px] bg-[#FCFBFB] shadow-[0px_2px_3px_0px_#00000040] mt-3 mb-1">
                    <div className=" text-[14px] font-[400] flex justify-evenly items-center py-4">
                      <p>File</p><p>Edit</p><p>View</p><p>Insert</p><p>Format</p><p>Tools</p><p>Table</p><p>Help</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <img src="https://cdn-icons-png.flaticon.com/128/722/722112.png" alt="" className="w-[20px] h-[20px] " />
                      <img src="https://cdn-icons-png.flaticon.com/128/722/722112.png" alt="" className="w-[20px] h-[20px]" />
                      <img src="https://cdn-icons-png.flaticon.com/128/318/318159.png" alt="" className="w-[20px] h-[20px]" />
                      <div className="h-[20px] w-[105px] bg-[#EBEBEB] text-[12px] px-1">Paragraph</div>
                      <img src="https://cdn-icons-png.flaticon.com/128/512/512142.png" alt="" className="w-[20px] h-[20px] mr-[110px]" />
                    </div>
                  </div>
                  <textarea id="content" rows="4" class="w-full p-2 rounded-[5px] h-[150px] focus:ring bg-[#FCFBFB] resize-none shadow-[0px_2px_3px_0px_#00000040]"></textarea>
                </div>
              </form>
            </div>
          )
        })}
        {assets.slice(3, 4).map((a) => {
          return (
            <div class="bg-[#FDFDFD] rounded-[15px] w-[500px] h-[600px] shadow-[0px_2px_5px_4px_#00000040] ">
              <div class="text-[16px] font-[600] bg-black text-white h-[50px] rounded-t-[15px] flex justify-between items-center">
                <p className="mx-auto">{a.asset_title}</p>
                <img src="https://cdn-icons-png.flaticon.com/128/471/471713.png" alt="" className="invert h-[25px] w-[25px] mr-5" /></div>
              <p class="text-black px-4 pt-4 h-[90px] shadow-[0px_2px_3px_0px_#00000040]"><span className="font-[600] text-[16px]">Description: </span><span className="text-[15px]">{a.asset_description}</span></p>
              <div class="mx-[35px]">
                <div>
                  <div className="bg-[#F2F2F2] h-[45px] flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" className="h-[20px] w-[25px] ml-5 rotate-180" alt="" />
                    <p className="font-[600] text-[20px] leading-[28px] mx-[20px]">Introduction</p>
                  </div>
                  <p class="h-[67px] text-[16px] font-[400] mt-4">The 4SA Method , How to bring a idea into progress ?</p>
                  <p className="text-[16px] font-[600] text-[#606161] text-right">See More</p>
                </div>
                <div className="my-5">
                  <div className=" h-[45px] flex items-center border border-[4px_solid_#D9D7D7]">
                    <img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" className="h-[20px] w-[25px] ml-5 rotate-180" alt="" />
                    <p className="font-[600] text-[20px] leading-[28px] mx-[20px]">Thread A</p>
                  </div>
                  <p class="h-[67px] text-[16px] font-[400] my-4">How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                  <p className="text-[16px] font-[600] text-[#606161] text-right">See More</p>
                </div>
                <div className="w-[85%] ml-[60px]">
                  <div className=" h-[40px] flex items-center border border-[4px_solid_#D9D7D7]">
                    <p className="font-[700] text-[20px] leading-[28px] mx-[100px] ">Example 1 </p>
                  </div>
                  <p class="text-[15px] font-[400]">You have a concept , How will you put into progress?</p>
                </div>
              </div>
            </div>
          )
        })}

        <div className="absolute right-8 top-[190%]">
          <div className="h-[85px] w-[85px] p-[15px] rounded-full bg-[#0029FF]"> <img src="https://s3-alpha-sig.figma.com/img/5b31/c50e/1a61e9875a4e31e0b5da40fe87694dd9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DckIk8Nxhta8DosrQcYAKdGH0AgxWseNeGLalR~eg90-tqSteHxS1H36Ed3Cf7HtG4SP2RqLLMXO1lMuEGUxa6NRF4pppU5fmXf3fIv8j8otT9rrRS-ufL4HD8fTyzIPDoi7eDN0qk3T98KVAGVgsbzNSxUdeMJvmRul3TfOzlNvmP9vm6dOrTWHBbMnCGWKenMQdZT3CLh0MO~NfaxsikdQiEIklTRVcJrmprNP7a5lcKPyzEC7kk55896nX2Jpmi~TbQPLTAT5ekecEpQ9-sIFsYs6EMnuWurZT1SOeArLKC-TloPIIiZQjNY1reZK27~YDMuuiEx5BwjeLSe-cQ__" alt="" className="h-[50px] w-[50px]" /></div>
          <div className="my-3 h-[85px] w-[85px] p-[15px] rounded-full bg-[#0029FF]"> <img src="https://s3-alpha-sig.figma.com/img/22ae/6e6c/9b8abad7a9c8d241fd0ab9eb6a9f95b5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z3Le6WbILqWmwvNJtkum0UUkM~xSNqkwi3WtJ2XW-AJNq-f-~IIqAAsYyjCK-FQ8KdhpBUfElUyxMGxdTdZSAmFpepVy7kDLXU~aevbBXMyexdTNhbE4imMatJ51mMNQo5sxP7H6MpzvW2T7HqnNrhzOsSTgSTthOBIs4PJbez0ukydbvcMxvMT4jbFAOr8RvoKe4yE9ggYOl2uQkNOZxYHLI~EdC0SjxUmMgR~JvdRF9c7G90kqXkKADlgbywqNaeh7drdG3i1RFgCvm2di95UBq36L5Kb3yBg-iQO8sbrLM6mtIX64NiWiB0L6Fcark7JVfU2igJphpqe2vuzSEA__" alt="" className="h-[50px] w-[50px]" /></div>
          <div className="h-[85px] w-[85px] p-[19px] rounded-full bg-[#0029FF]"> <img src="https://s3-alpha-sig.figma.com/img/1438/def8/3870fdb52d83bb903bb6574487be8860?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cpF58OpR7awqvVZpVpHcVnOiCpDpqVcTsjEPHZ53-YhGEVVIe1IGKyZVNiaYpnl8Gv4ClNz-omFxOWjAUNsHIO71AJyaGFZzpW0as4xP0iihKFcl7TL8FOrQ6aIKUrHpqF8VI6mXVLAPXX1mCEA62cdmV5KAyjUoCYrj3oeoEa1weru65b1cBMLKfYNGDyB92vJtLP5neZeUoREDtTA7cz8PGzt-BhstQFGT36hlQh-b6T5r2BiEJhXvAlfGu-~4rUeOW6JQiFif6tB34FFVAWzE7sYDDKfdsi5kjCzr1L3hup1GUoDbpHPEcmelj1AypSOp~tAhaY1D79qF1Ps4rQ__" alt="" className="h-[50px] w-[50px]" /></div>
        </div>

        {(board === true) ?
          <div className="bg-[#FDFDFD] rounded-[15px] w-[300px] h-[400px] shadow-[0px_2px_5px_4px_#00000040] fixed left-0 top-[110px]">
            <div class="text-[16px] font-[600] bg-black text-white h-[50px] rounded-t-[15px] flex justify-between items-center">
              <p className="mx-4">Journey Board</p>
              <img src="https://cdn-icons-png.flaticon.com/128/3236/3236910.png" alt="" className="invert h-[35px] w-[35px] mr-5" onClick={() => { setboard(false) }} /></div>
            <div class="text-black px-4 pt-4 h-[90px]"><p className="font-[600] text-[16px]">Explore the world of management</p><div className="text-[15px]">
              <ul className=" list-disc mx-7 mt-2">
                <li>Technical Project Management</li>
                <li>Threadbuild</li>
                <li>Structure your pointers</li>
                <li>4SA Method</li>
              </ul>
            </div></div>
          </div> :
          <div class="bg-[#FDFDFD] rounded-[15px] w-[100px] h-[400px] shadow-[0px_2px_5px_4px_#00000040] absolute left-0 top-[110px] translate-x-[-10px]">
            <div class="text-[16px] font-[600] bg-black text-white h-[50px] rounded-t-[15px] flex justify-end items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/3236/3236910.png" alt="" className="invert h-[35px] w-[35px] mr-5 rotate-180" onClick={() => { setboard(true) }} />
            </div>
            <div className="p-4 border border-[5px_solid_#0029FF] ml-10 mr-3 mt-5 text-[18px] text-[#0029FF] font-[700] rounded-[20px]">
              1
            </div>
          </div>
        }

        <div class="bg-[#FDFDFD] rounded-[15px] w-[100px] h-[300px] shadow-[0px_2px_5px_4px_#00000040] absolute right-0 top-[110px] translate-x-[10px]">
          <div class="text-[13px] font-[400] bg-black text-white w-[50px] h-full rounded-l-[15px]">
            <p className="w-[5px] h-full mx-auto "><span className="text-[22px] font-[600]"> X </span>&nbsp; N O T I C E &nbsp; B O A R D</p>

          </div>
        </div>

      </div>
    </div>
  );
}
