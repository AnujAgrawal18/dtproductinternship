import { promises as fs } from 'fs';
import { NextResponse} from "next/server";


export async function GET(req) {
    const file = await fs.readFile(process.cwd() + '/app/info.json', 'utf8');
    const findResult = await JSON.parse(file);
    return NextResponse.json(findResult);
}