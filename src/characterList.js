const characterList = [
  {
    name: "Albedo",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Albedo.png",
    rarity: 5,
    element: "geo",
    weapon: "Sword",
    description:
      "Albedo is a Geo user who wields a sword. He is the Chief Alchemist of the Knights of Favonius and the leader of the Alchemist Guild.",
  },
  {
    name: "Alhaitham",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Alhaitham.png",
    rarity: 5,
    element: "dendro",
    weapon: "Sword",
    description:
      "A scholar from Sumeru who is known for his intellect and calm demeanor. He values knowledge and rationality.",
  },
  {
    name: "Aloy",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Aloy.png",
    rarity: 5,
    element: "cryo",
    weapon: "Bow",
    description:
      "A skilled hunter from the world of Horizon Zero Dawn, brought into Teyvat to fight alongside other heroes.",
  },
  {
    name: "Arlecchino",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Arlecchino.png",
    rarity: 5,
    element: "pyro",
    weapon: "Claymore",
    description:
      "A member of the Fatui and one of the Harbingers, known for her commanding presence and fierce combat skills.",
  },
  {
    name: "Ayaka",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Ayaka.png",
    rarity: 5,
    element: "cryo",
    weapon: "Sword",
    description:
      "The proud and elegant princess of the Kamisato Clan, she is known for her grace and mastery of the Cryo element.",
  },
  {
    name: "Ayato",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Ayato.png",
    rarity: 5,
    element: "hydro",
    weapon: "Sword",
    description:
      "The head of the Kamisato Clan and Ayaka’s older brother, known for his strategic mind and leadership.",
  },
  {
    name: "Baizhu",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Baizhu.png",
    rarity: 5,
    element: "dendro",
    weapon: "Catalyst",
    description:
      "The owner of Bubu Pharmacy in Liyue, known for his medical skills and enigmatic personality.",
  },
  {
    name: "Childe",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Childe.png",
    rarity: 5,
    element: "hydro",
    weapon: "Bow",
    description:
      "A Fatui Harbinger known for his formidable combat skills and playful personality. He wields the power of Hydro.",
  },
  {
    name: "Chiori",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Chiori.png",
    rarity: 5,
    element: "geo",
    weapon: "Catalyst",
    description:
      "A mysterious figure who harnesses the power of Geo with an air of sophistication and mystery.",
  },
  {
    name: "Clorinde",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Clorinde.png",
    rarity: 5,
    element: "electro",
    weapon: "Sword",
    description:
      "A prominent figure known for her mastery of Electro and her role in the Inazuma region.",
  },
  {
    name: "Cyno",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Cyno.png",
    rarity: 5,
    element: "electro",
    weapon: "Polearm",
    description:
      "A vigilant warrior who wields Electro and excels in polearm combat. Known for his unwavering sense of justice.",
  },
  {
    name: "Dehya",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Dehya.png",
    rarity: 5,
    element: "pyro",
    weapon: "Claymore",
    description:
      "A fierce warrior who channels the power of Pyro through her claymore, known for her strength and determination.",
  },
  {
    name: "Diluc",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Diluc.png",
    rarity: 5,
    element: "pyro",
    weapon: "Claymore",
    description:
      "A wealthy and powerful figure in Mondstadt, known for his mastery of Pyro and his role as the Darknight Hero.",
  },
  {
    name: "Eula",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Eula.png",
    rarity: 5,
    element: "cryo",
    weapon: "Claymore",
    description:
      "The Spindrift Knight of Mondstadt, known for her prowess in combat and her Cryo abilities.",
  },
  {
    name: "Furina",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Furina.png",
    rarity: 5,
    element: "hydro",
    weapon: "Sword",
    description:
      "An enigmatic figure who commands Hydro with a graceful yet enigmatic presence.",
  },
  {
    name: "Ganyu",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Ganyu.png",
    rarity: 5,
    element: "cryo",
    weapon: "Bow",
    description:
      "A half-qilin Adeptus in Liyue, known for her mastery of Cryo and her role as a dedicated envoy of the Geo Archon.",
  },
  {
    name: "HuTao",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Hu%20Tao.png",
    rarity: 5,
    element: "pyro",
    weapon: "Catalyst",
    description:
      "The 77th Director of the Wangsheng Funeral Parlor, known for her lively personality and powerful Pyro abilities.",
  },
  {
    name: "Itto",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Itto.png",
    rarity: 5,
    element: "geo",
    weapon: "Claymore",
    description:
      "A rebellious leader of the Arataki Gang, known for his strength and his mastery of Geo.",
  },
  {
    name: "Jean",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Jean.png",
    rarity: 5,
    element: "anemo",
    weapon: "Sword",
    description:
      "The Acting Grand Master of the Knights of Favonius, known for her dedication to the people of Mondstadt and her Anemo abilities.",
  },
  {
    name: "Kazuha",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Kazuha.png",
    rarity: 5,
    element: "anemo",
    weapon: "Sword",
    description:
      "A wandering samurai from Inazuma, known for his mastery of Anemo and his calm, relaxed demeanor.",
  },
  {
    name: "Keqing",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Keqing.png",
    rarity: 5,
    element: "electro",
    weapon: "Sword",
    description:
      "A highly skilled warrior of Liyue, known for her commitment to her work and her adeptness with the Electro element.",
  },
  {
    name: "Klee",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Klee.png",
    rarity: 5,
    element: "pyro",
    weapon: "Catalyst",
    description:
      "A cheerful and energetic child who wields Pyro through her explosive Catalyst abilities.",
  },
  {
    name: "Kokomi",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Kokomi.png",
    rarity: 5,
    element: "hydro",
    weapon: "Catalyst",
    description:
      "The Divine Priestess of Watatsumi Island, known for her mastery of Hydro and her leadership in times of crisis.",
  },
  {
    name: "Lyney",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Lyney.png",
    rarity: 5,
    element: "pyro",
    weapon: "Bow",
    description:
      "A charming magician with a flair for the dramatic, wielding the Pyro element in his performances.",
  },
  {
    name: "Mona",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Mona.png",
    rarity: 5,
    element: "hydro",
    weapon: "Catalyst",
    description:
      "Mona is a renowned astrologer known for her mysterious and enigmatic personality. She uses Hydro abilities to manipulate the elements and unveil hidden truths. Despite her financial struggles, she is deeply devoted to her craft and pursues her work with great passion.",
  },
  {
    name: "Nahida",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Nahida.png",
    rarity: 5,
    element: "dendro",
    weapon: "Catalyst",
    description: "Nahida, the Dendro Archon, is a wise and gentle figure from Sumeru. Her deep connection to the natural world and her knowledge of the Dendro element make her a revered leader in her region. She is known for her nurturing nature and profound understanding of the world."
  },
  {
    name: "Navia",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Navia.png",
    rarity: 5,
    element: "geo",
    weapon: "Claymore",
    Description: "Navia is a distinguished Geo user with a stoic and commanding presence. Known for her exceptional skill with a Claymore, she embodies the strength and resilience of the Geo element. Her leadership and unwavering dedication make her a respected figure among her peers."

  },
  {
    name: "Neuvillette",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Neuvillette.png",
    rarity: 5,
    element: "hydro",
    weapon: "Polearm",
    description:"Neuvillette is a skilled warrior known for his prowess with the Polearm and his control over the Hydro element. His calm demeanor and strategic mind make him a formidable opponent and a respected leader in battle."
  },
  {
    name: "Nilou",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Nilou.png",
    rarity: 5,
    element: "hydro",
    weapon: "Sword",
  },
  {
    name: "Qiqi",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Qiqi.png",
    rarity: 5,
    element: "cryo",
    weapon: "Sword",
  },
  {
    name: "Raiden",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Raiden.png",
    rarity: 5,
    element: "electro",
    weapon: "Polearm",
  },
  {
    name: "Shenhe",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Shenhe.png",
    rarity: 5,
    element: "cryo",
    weapon: "Polearm",
  },
  {
    name: "Sigewinne",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Sigewinne.png",
    rarity: 5,
    element: "hydro",
    weapon: "Bow",
  },
  {
    name: "Tighnari",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Tighnari.png",
    rarity: 5,
    element: "dendro",
    weapon: "Bow",
  },
  {
    name: "Traveler (Anemo)",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Anemo).png",
    rarity: 5,
    element: "anemo",
    weapon: "Sword",
  },
  {
    name: "Traveler (Dendro)",
    imgSrc:
      "https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Dendro).png",
    rarity: 5,
    element: "dendro",
    weapon: "Sword",
  },
  {
    name: "Traveler (Electro)",
    imgSrc:
      "https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Electro).png",
    rarity: 5,
    element: "electro",
    weapon: "Sword",
  },
  {
    name: "Traveler (Geo)",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Geo).png",
    rarity: 5,
    element: "geo",
    weapon: "Sword",
  },
  {
    name: "Traveler (Hydro)",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Traveler%20(Hydro).png",
    rarity: 5,
    element: "hydro",
    weapon: "Sword",
  },
  {
    name: "Venti",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Venti.png",
    rarity: 5,
    element: "anemo",
    weapon: "Bow",
  },
  {
    name: "Wanderer",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Wanderer.png",
    rarity: 5,
    element: "anemo",
    weapon: "Catalyst",
  },
  {
    name: "Wriothesley",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Wriothesley.png",
    rarity: 5,
    element: "cryo",
    weapon: "Catalyst",
  },
  {
    name: "Xianyun",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Xianyun.png",
    rarity: 5,
    element: "anemo",
    weapon: "Catalyst",
  },
  {
    name: "Xiao",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Xiao.png",
    rarity: 5,
    element: "anemo",
    weapon: "Polearm",
  },
  {
    name: "Yae Miko",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Yae%20Miko.png",
    rarity: 5,
    element: "electro",
    weapon: "Catalyst",
  },
  {
    name: "Yelan",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Yelan.png",
    rarity: 5,
    element: "hydro",
    weapon: "Bow",
  },
  {
    name: "Yoimiya",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Yoimiya.png",
    rarity: 5,
    element: "pyro",
    weapon: "Bow",
  },
  {
    name: "Zhongli",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Zhongli.png",
    rarity: 5,
    element: "geo",
    weapon: "Polearm",
  },
  {
    name: "Amber",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Amber.png",
    rarity: 4,
    element: "pyro",
    weapon: "Bow",
  },
  {
    name: "Barbara",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Barbara.png",
    rarity: 4,
    element: "hydro",
    weapon: "Catalyst",
  },
  {
    name: "Beidou",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Beidou.png",
    rarity: 4,
    element: "electro",
    weapon: "Claymore",
  },
  {
    name: "Bennett",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Bennett.png",
    rarity: 4,
    element: "pyro",
    weapon: "Sword",
  },
  {
    name: "Candace",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Candace.png",
    rarity: 4,
    element: "hydro",
    weapon: "Polearm",
  },
  {
    name: "Charlotte",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Charlotte.png",
    rarity: 4,
    element: "cryo",
    weapon: "Bow",
  },
  {
    name: "Chevreuse",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Chevreuse.png",
    rarity: 4,
    element: "pyro",
    weapon: "Polearm",
  },
  {
    name: "Chongyun",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Chongyun.png",
    rarity: 4,
    element: "cryo",
    weapon: "Claymore",
  },
  {
    name: "Collei",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Collei.png",
    rarity: 4,
    element: "dendro",
    weapon: "Bow",
  },
  {
    name: "Diona",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Diona.png",
    rarity: 4,
    element: "cryo",
    weapon: "Bow",
  },
  {
    name: "Dori",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Dori.png",
    rarity: 4,
    element: "electro",
    weapon: "Catalyst",
  },
  {
    name: "Faruzan",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Faruzan.png",
    rarity: 4,
    element: "anemo",
    weapon: "Bow",
  },
  {
    name: "Fischl",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Fischl.png",
    rarity: 4,
    element: "electro",
    weapon: "Bow",
  },
  {
    name: "Freminet",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Freminet.png",
    rarity: 4,
    element: "cryo",
    weapon: "Claymore",
  },
  {
    name: "Gaming",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Gaming.png",
    rarity: 4,
    element: "pyro",
    weapon: "Claymore",
  },
  {
    name: "Gorou",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Gorou.png",
    rarity: 4,
    element: "geo",
    weapon: "Bow",
  },
  {
    name: "Heizou",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Heizou.png",
    rarity: 4,
    element: "anemo",
    weapon: "Catalyst",
  },
  {
    name: "Kaeya",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Kaeya.png",
    rarity: 4,
    element: "cryo",
    weapon: "Sword",
  },
  {
    name: "Kaveh",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Kaveh.png",
    rarity: 4,
    element: "dendro",
    weapon: "Sword",
  },
  {
    name: "Kirara",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Kirara.png",
    rarity: 4,
    element: "dendro",
    weapon: "Bow",
  },
  {
    name: "Kuki Shinobu",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Kuki%20Shinobu.png",
    rarity: 4,
    element: "electro",
    weapon: "Sword",
  },
  {
    name: "Layla",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Layla.png",
    rarity: 4,
    element: "cryo",
    weapon: "Sword",
  },
  {
    name: "Lisa",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Lisa.png",
    rarity: 4,
    element: "electro",
    weapon: "Catalyst",
  },
  {
    name: "Lynette",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Lynette.png",
    rarity: 4,
    element: "anemo",
    weapon: "Sword",
  },
  {
    name: "Mika",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Mika.png",
    rarity: 4,
    element: "cryo",
    weapon: "Sword",
  },
  {
    name: "Ningguang",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Ningguang.png",
    rarity: 4,
    element: "geo",
    weapon: "Catalyst",
  },
  {
    name: "Noelle",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Noelle.png",
    rarity: 4,
    element: "geo",
    weapon: "Claymore",
  },
  {
    name: "Razor",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Razor.png",
    rarity: 4,
    element: "electro",
    weapon: "Claymore",
  },
  {
    name: "Rosaria",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Rosaria.png",
    rarity: 4,
    element: "cryo",
    weapon: "Polearm",
  },
  {
    name: "Sara",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Sara.png",
    rarity: 4,
    element: "electro",
    weapon: "Bow",
  },
  {
    name: "Sayu",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Sayu.png",
    rarity: 4,
    element: "anemo",
    weapon: "Claymore",
  },
  {
    name: "Sethos",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Sethos.png",
    rarity: 4,
    element: "electro",
    weapon: "Bow",
  },
  {
    name: "Sucrose",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Sucrose.png",
    rarity: 4,
    element: "anemo",
    weapon: "Catalyst",
  },
  {
    name: "Thoma",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Thoma.png",
    rarity: 4,
    element: "pyro",
    weapon: "Polearm",
  },
  {
    name: "Xiangling",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Xiangling.png",
    rarity: 4,
    element: "pyro",
    weapon: "Polearm",
  },
  {
    name: "Xingqiu",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Xingqiu.png",
    rarity: 4,
    element: "hydro",
    weapon: "Sword",
  },
  {
    name: "Xinyan",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Xinyan.png",
    rarity: 4,
    element: "pyro",
    weapon: "Claymore",
  },
  {
    name: "Yanfei",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Yanfei.png",
    rarity: 4,
    element: "pyro",
    weapon: "Catalyst",
  },
  {
    name: "Yaoyao",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Yaoyao.png",
    rarity: 4,
    element: "dendro",
    weapon: "Catalyst",
  },
  {
    name: "Yun Jin",
    imgSrc: "https://rerollcdn.com/GENSHIN/Characters/1/Yun%20Jin.png",
    rarity: 4,
    element: "geo",
    weapon: "Polearm",
  },
];

export default characterList;
