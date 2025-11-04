export default function User (){
    
  const user = {
    name:'GJ504b',
    imageUrl:"../public/GJ504b.jpg",
    title:'作者的头像',
    imgSize:90,
  }
  return(
    <>
        <h1>{user.name}</h1>
        {/* 为什么style用双括号，style里的对象 */}
        <img src={user.imageUrl} title={"the photo of "+user.name} alt={user.title} style={{
        height:user.imgSize,
        width:user.imgSize,
        border: "2px solid"
        }} />
    </>
  )
}