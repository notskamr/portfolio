import type { APIContext } from "astro";

export async function GET({redirect}: APIContext) {
    return redirect('/resume.pdf', 301);
}