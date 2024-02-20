'use strict'

let reviews = [
    {
        img: "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png?f=webp",
        name : "PHEAKDEY",
        des : "Great app, easy to use. Helps our small business save time and money to create different marketing materials professionally. Thank you."
    },
    {
        img: "https://cdn3d.iconscout.com/3d/premium/thumb/business-male-7267567-5914557.png?f=webp",
        name : "PHEAKTRA",
        des : "I need a good background remover for my work and I've been through them all it feels like. This one is the best by far. It's so easy to use and the results always look amazing. Thank you."
    },
    {
        img: "https://cdn3d.iconscout.com/3d/premium/thumb/female-employee-5143568-4308132.png",
        name: "TEVY",
        des: "The app is awesome and has helped me create great content for my business! I definitely recommend downloading this app and purchasing the pro!"
    },
    {
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg",
        name: "KIMLA",
        des: "All-in-one graphic design only thing I'd add is more stickers like the parental advisory sticker for music covers but besides that 10/10."
    },
    {
        img: "https://cdn3d.iconscout.com/3d/premium/thumb/casual-female-5143566-4308130.png",
        name: "PHANMAI",
        des: "I make jewelry, so I needed an app that would help me remove the background in my photos. This app did exactly what I needed it to do. I simply took a photo, used this app to remove the background, and then I was able to post it on my Etsy store..."
    },
    {
        img: "https://www.arweave.net/22WIV7g7xC627UnsB5QNH4y8I4bDC14ecj1F3MGzzDk?ext=png",
        name: "ELON MUSK",
        des: "It’s amazingly easy and gives the perfect results for my bags and accessories. It looks like it was done by a professional photographer."
    },
]
let card = "";
let reviewCard = document.querySelector("#review");
reviews.map((review) => {
    card += `
    <div class="w-full bg-on-bg-color rounded-lg p-3">
        <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg" src="${review.img}" alt="Bonnie image"/>
            <h5 class="mb-1 text-nav font-bold ">${review.name}</h5>
            <p class="text-[14px] text-center card">${review.des}</p>
        </div>
        <div>
            <ul class="flex gap-2 justify-center text-primary-color">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
            </ul>
                <div class="flex justify-center mt-3 pb-10">
                <button class="text-primary-color transition duration-300 hover:border hover:border-variant-primary-color hover:delay-300 text-button font-normal rounded p-1.5 px-3 border border-primary-color lg:mt-0">
                    <span>View More</span>
                </button>
                </div>   
        </div>
    </div>
    `;
});
reviewCard.innerHTML += card;
