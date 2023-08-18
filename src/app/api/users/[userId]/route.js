import { NextResponse } from "next/server";

export function DELETE(request,{params}){
    console.log(params);
    const {userId} =params;
    console.log("User ID :",userId);
    return NextResponse.json({
        message: "testing deleted",
    });

}