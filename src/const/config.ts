export function config(){
  switch(process.env.NODE_ENV){
    case "development":
      return {
        imgSrc: "/src/images/"
      }
    default:
      return {
        imgSrc: "/src/"
      }
  }
}