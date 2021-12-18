import React from "react";
import Card from "./Card";

const Cards = () => {
  const places = [
    {
      ID: "01_100",
      Name: "湖莓宴餐坊",
      Address: "苗栗縣大湖鄉富興村八寮彎2-7號4樓",
      Tel: "037-995677",
      HostWords:
        "湖苺宴開在大湖酒莊的4樓，是大湖地區農會經營的田媽媽餐坊，但是不同於一般田園風格的田媽媽主題餐廳，主打草莓創意料理的湖苺宴，裝潢、菜色都充滿年輕想法，一群六年級中段班的田媽媽，把她們對草莓的奇思異想，充份發揮在料理上。\r\n餐廳所供的菜色會依季節不同做更換，皆以套餐為主，在草莓產季菜單有德國烤豬腳酌草莓醋酸菜、草莓魚排酌草莓酸辣醬等，另外，這裡的意大利麵可是別處吃不到的哦！因為田媽媽們在麵條中加入了草莓，遊客吃了會有驚豔之感哦！\r\n若是水梨產季，則推出水梨風味套餐，其中「水梨磨菇里肌肉餐」餐點以新鮮的水梨加上鮮嫩多汁的里肌肉以燴飯的方式呈現，讓您吃到水果的鮮甜及富有彈性的里肌肉，多層次的口感保證讓您回味無窮。",
      Price: "",
      OpenHours: "",
      CreditCard: "True",
      TravelCard: "True",
      TrafficGuidelines: "",
      ParkingLot: "",
      Url: "",
      Email: "",
      BlogUrl: "",
      PetNotice: "",
      Reminder: "",
      FoodMonths: "",
      FoodCapacity: "",
      FoodFeature:
        "湖苺宴開在大湖酒莊的4樓，是大湖地區農會經營的田媽媽餐坊，但是不同於一般田園風格的田媽媽主題餐廳，主打草莓創意料理的湖苺宴，裝潢、菜色都充滿年輕想法，一群六年級中段班的田媽媽，把她們對草莓的奇思異想，充份發揮在料理上。\r\n餐廳所供的菜色會依季節不同做更換，皆以套餐為主，在草莓產季菜單有德國烤豬腳酌草莓醋酸菜、草莓魚排酌草莓酸辣醬等，另外，這裡的意大利麵可是別處吃不到的哦！因為田媽媽們在麵條中加入了草莓，遊客吃了會有驚豔之感哦！\r\n若是水梨產季，則推出水梨風味套餐，其中「水梨磨菇里肌肉餐」餐點以新鮮的水梨加上鮮嫩多汁的里肌肉以燴飯的方式呈現，讓您吃到水果的鮮甜及富有彈性的里肌肉，多層次的口感保證讓您回味無窮。",
      City: "苗栗縣",
      Town: "大湖鄉",
      Coordinate: "24.4402288,120.876103",
      PicURL:
        "https://ezgo.coa.gov.tw/Uploads/opendata/TainmaMain01/APPLY_D/20151007173924.jpg",
    },
    {
      ID: "2",
      Name: "湖莓宴餐坊",
      Address: "苗栗縣大湖鄉富興村八寮彎2-7號4樓",
      Tel: "037-995677",
      HostWords:
        "湖苺宴開在大湖酒莊的4樓，是大湖地區農會經營的田媽媽餐坊，但是不同於一般田園風格的田媽媽主題餐廳，主打草莓創意料理的湖苺宴，裝潢、菜色都充滿年輕想法，一群六年級中段班的田媽媽，把她們對草莓的奇思異想，充份發揮在料理上。\r\n餐廳所供的菜色會依季節不同做更換，皆以套餐為主，在草莓產季菜單有德國烤豬腳酌草莓醋酸菜、草莓魚排酌草莓酸辣醬等，另外，這裡的意大利麵可是別處吃不到的哦！因為田媽媽們在麵條中加入了草莓，遊客吃了會有驚豔之感哦！\r\n若是水梨產季，則推出水梨風味套餐，其中「水梨磨菇里肌肉餐」餐點以新鮮的水梨加上鮮嫩多汁的里肌肉以燴飯的方式呈現，讓您吃到水果的鮮甜及富有彈性的里肌肉，多層次的口感保證讓您回味無窮。",
      Price: "",
      OpenHours: "",
      CreditCard: "True",
      TravelCard: "True",
      TrafficGuidelines: "",
      ParkingLot: "",
      Url: "",
      Email: "",
      BlogUrl: "",
      PetNotice: "",
      Reminder: "",
      FoodMonths: "",
      FoodCapacity: "",
      FoodFeature:
        "湖苺宴開在大湖酒莊的4樓，是大湖地區農會經營的田媽媽餐坊，但是不同於一般田園風格的田媽媽主題餐廳，主打草莓創意料理的湖苺宴，裝潢、菜色都充滿年輕想法，一群六年級中段班的田媽媽，把她們對草莓的奇思異想，充份發揮在料理上。\r\n餐廳所供的菜色會依季節不同做更換，皆以套餐為主，在草莓產季菜單有德國烤豬腳酌草莓醋酸菜、草莓魚排酌草莓酸辣醬等，另外，這裡的意大利麵可是別處吃不到的哦！因為田媽媽們在麵條中加入了草莓，遊客吃了會有驚豔之感哦！\r\n若是水梨產季，則推出水梨風味套餐，其中「水梨磨菇里肌肉餐」餐點以新鮮的水梨加上鮮嫩多汁的里肌肉以燴飯的方式呈現，讓您吃到水果的鮮甜及富有彈性的里肌肉，多層次的口感保證讓您回味無窮。",
      City: "苗栗縣",
      Town: "大湖鄉",
      Coordinate: "24.4402288,120.876103",
      PicURL:
        "https://ezgo.coa.gov.tw/Uploads/opendata/TainmaMain01/APPLY_D/20151007173924.jpg",
    },
  ];

  return (
    <main className="cards">
      {places.map((place) => (
        <Card place={place} key={place.ID} />
      ))}
    </main>
  );
};

export default Cards;
