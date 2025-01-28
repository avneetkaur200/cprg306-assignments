import Link from 'next/link';
import React from "react";

export default function StudentInfo(){
    return (
        <div>
            <p> Avneet Kaur</p>
            <p> 
                <Link href="https://github.com/avneetkaur200/cprg306-assignments.git">My Github Repository</Link>
            </p>
        </div>
    )
}