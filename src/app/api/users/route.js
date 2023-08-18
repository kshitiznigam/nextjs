import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

export function GET(request){

    const users = [{
        name: 'kshitiz nigam',
        phone: '7011615520',
        course: 'java'
    },
    {
        name: 'nigam',
        phone: '7011615520',
        course: 'c++'
    },
    {
        name: 'suresh',
        phone: '7011615520',
        course: 'nextjs'
    },
];
return NextResponse.json(users);

}

export function POST(){

}

export function DELETE(request){
console.log("delete api called");
return NextResponse.json({
    message: "deleted !!",
    status: true,
});
}

export function PUT(){

}