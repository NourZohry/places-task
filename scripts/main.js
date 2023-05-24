let cardsData = [
    {
        "title": "egypt tangbia",
        "description": "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 22,
        "img": "img-1.jpeg"
    },
    {
        "title": "olling phisotip",
        "description": "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 13,
        "img": "img-2.jpeg"
    },
    {
        "title": "cortia dyna",
        "description": "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 8,
        "img": "img-3.jpeg"
    },
    {
        "title": "sysne of dubai",
        "description": "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 7,
        "img": "img-4.jpeg"
    },
    {
        "title": "egypt tangbia",
        "description": "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 7,
        "img": "img-5.jpeg"
    },
    {
        "title": "olling phisotip",
        "description": "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 13,
        "img": "img-6.jpeg"
    },
    {
        "title": "cortia dyna",
        "description": "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 8,
        "img": "img-7.jpeg"
    },
    {
        "title": "sysne of dubai",
        "description": "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 7,
        "img": "img-8.jpeg"
    },
    {
        "title": "egypt tangbia",
        "description": "Denatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 22,
        "img": "img-9.jpeg"
    },
    {
        "title": "olling phisotip",
        "description": "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 13,
        "img": "img-10.jpeg"
    },
    {
        "title": "cortia dyna",
        "description": "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 8,
        "img": "img-11.jpeg"
    },
    {
        "title": "sysne of dubai",
        "description": "Penatibus et magnis dis parturient montes, nascetur ridiculus mus",
        "date": "aug 5, 2013",
        "comments": 7,
        "img": "img-12.jpeg"
    },
]

function loadModal(card) {

    $('#popupModal').modal('toggle');
    $('#modalTitle').text(card.title);
    $('#modalDesc').text(card.description);
    $('#modalImage').attr('src', "assets/images/" + card.img)


}

$(document).ready(function () {

    // let mainContainer = $("#main-container");
    // mainContainer.append()

    let cardsRow = $("#cards-row");
    for (let i = 0; i < cardsData.length; i++) {
        let div1 = $('<div class="col-sm-6 col-md-4 col-lg-3 g-3">');
        let div2 = $('<div class="card rounded-0 border-0 text-center">');
        let img = $('<img alt="...">');
        img.attr('src', "/assets/images/" + cardsData[i].img)
        let div3 = $('<div class="card-body">');
        let h3 = $('<h3 class="card-title"></h3>');
        h3.text(cardsData[i].title);
        let h4 = $('<h4 class="card-text"></h4>');
        h4.text(cardsData[i].description);
        let div5 = $('<div class="card-info d-flex flex-row flex-md-column flex-lg-row justify-content-between align-items-center">');

        let div6 = $('<div class="d-flex flex-row align-items-center gap-1">');
        let icon1 = $('<i class="bi bi-calendar"></i>');
        let h51 = $('<h5 class="card-date">${cardsData[i].date}</h5>');
        h51.text(cardsData[i].date);


        let div7 = $('<div class="d-flex flex-row align-items-center gap-1">');
        let icon2 = $('<i class="bi bi-chat-dots"></i>');
        let h52 = $('<h5 class="card-comments"></h5>');
        h52.text(cardsData[i].comments + " comments");

        div1.append(div2);
        div2.append(img);
        div2.append(div3);
        div3.append(h3);
        div3.append(h4);
        div3.append(div5);
        div5.append(div6);
        div5.append(div7);
        div6.append(icon1);
        div6.append(h51);
        div7.append(icon2, h52);

        let newCard = div1;

        div2.click(function () {
            loadModal(cardsData[i]);

        });


        //     let newCard = `<div class="col-sm-6 col-md-4 col-lg-3 g-3">
        //     <div class="card rounded-0 border-0 text-center" onclick="loadModal(${cardsData[i].title, cardsData[i].description, cardsData[i].img})"">
        //         <img src="/assets/images/${cardsData[i].img}" alt="...">
        //         <div class="card-body">
        //           <h3 class="card-title">${cardsData[i].title}</h3>
        //           <h4 class="card-text">${cardsData[i].description}</h4>
        //             <div class="card-info d-flex flex-row flex-md-column flex-lg-row justify-content-between align-items-center">
        //                 <div class="d-flex flex-row align-items-center gap-1">
        //                     <i class="bi bi-calendar"></i>
        //                     <h5 class="card-date">${cardsData[i].date}</h5>
        //                 </div>
        //                 <div class="d-flex flex-row align-items-center gap-1">
        //                     <i class="bi bi-chat-dots"></i>
        //                     <h5 class="card-comments">${cardsData[i].comments} comments</h5>
        //                 </div>
        //             </div>
        //         </div>
        //       </div>
        // </div>`

        cardsRow.append(newCard);
    }


});