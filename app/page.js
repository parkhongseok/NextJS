// import Image from "next/image";
// import foodImg from "/public/food0.png"
export default function Home() {
  let data = ['hamberger', 'chickin', 'pasta']
  return (
    <div>
      <h1 className="title">Products</h1>
      {
      data.map((a, i)=>{
        return (
          <div className="food" key={i}>
            {/* 단순 img 태그가 아닌, Image를 불러와서 사용하면 다음 세 가지의 이미지 최적화 기능을 제공한다.
            lazyLoading, size 최적화, layout shift 방지
            하지만, 외부 링크의 이미지나 이미지를 반복문 내부에서 변경하려면 더 번거롭다.*/}
            {/* <Image src={foodImg} className="food-img"></Image> */}
            <img src={`/food${i}.png`} className="food-img"/>
            <h4>{a} $40</h4>
          </div>
        )
      })}
    </div>
  );            
}
