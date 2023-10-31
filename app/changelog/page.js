// import { Octokit } from "octokit"

// export default async function Changelog() {

//   const octokit = new Octokit({auth: `${process.env.GITHUB_TOKEN}`})

//     const data = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
//     owner: "DroidX-ui",
//     repo: "Release_changelogs",
//     path: "DroidX-Changelogs.mk",
//     per_page: 2,
//     headers: {
//       "content-type": "text/plain",
//       "x-github-api-version": "2022-11-28",
//     },
//   });


// // var releases = await client.Repository.Release.GetAll("octokit", "octokit.net");
// // var latest = releases.Result.ElementAt(0);
// // Console.WriteLine(
// //     "The latest release is tagged at {0} and is named {1}",
// //     latest.TagName,
// //     latest.Name);
  
// const decoded_data = atob(data.data.content.replaceAll("/\s\g", "  a  "))

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between">
//              <div id="container">

// <div className="changelog_container">
//     <div className="head font-inter">
//       <div className=" flex gap-1">
//         <div className="h-4 w-4 bg-red-500 rounded-full"></div>
//         <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
//         <div className="h-4 w-4 bg-green-500 rounded-full"></div>


//       </div>
//       CHANGELOG
//       <div className="w-10 "></div>
//     </div>
//     <div className="user">
//         limetree@DroidX-UI:~$ <span>Version 1.5.1</span><br /><br />
//         <div className="ul">
//         <li>CHANGELOG DETAILS</li><br />

//   <pre className='changelog_content'>
    
//         {decoded_data}
//   </pre>
//   </div>
//   </div>
//   </div>
// </div>
//     </main>
//   )
// }


export default  function Changelog() {
  return(
    <>
      Changelog page
    </>
  )
}
