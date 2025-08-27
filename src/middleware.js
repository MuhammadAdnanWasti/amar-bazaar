// import { getToken } from 'next-auth/jwt';
// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export async function middleware(req) {
//   const token= await getToken({req})
//   const isTokenOn=Boolean.
//     // let user=false
//     // let isProductsPage= request.nextUrl.pathname.startsWith('/dashboard/add-product');
//     // if (isProductsPage && !user) {
//     //     return NextResponse.redirect(new URL('/Login', request.url))
//     // }
//   return NextResponse.next();
// }
 
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*"], // protect everything under /dashboard
};
