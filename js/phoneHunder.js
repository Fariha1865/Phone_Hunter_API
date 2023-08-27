const loadPhones = async(phoneName) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
    const res = await fetch(url);
    const data = await res.json();

    showDataInCard(data.data);
}

function showDataInCard(data){

    const cardHolder = document.getElementById('card_container');
    cardHolder.textContent = '';


    console.log(data)
    for(card of data)
    {
        const phonCard = document.createElement('div');
        phonCard.innerHTML=`
        
        <figure><img src=${card.image} alt="phone" /></figure>
        <div class="card-body flex flex-col items-center">
          <h2 class="card-title text-center font-bold">${card.phone_name}</h2>
          <p class="text-center"> A stylish and powerful smartphone, featuring a brilliant display and advanced camera capabilities</p>
          <p class="text-lg font-bold">$999</p>
          <div class="card-actions mt-5">
            <button class="btn btn-primary">Show Details</button>
          </div>
        </div>
        
        
        `
        phonCard.classList = 'card bg-base-100 shadow-xl flex flex-col items-center'
        cardHolder.appendChild(phonCard);
    }
}
const searchButton = document.getElementById('btnSearch');
const searchBox = document.getElementById('searchBox');

function handleClickandEnter(event){

    if(event.key === 'Enter' ||  event.type === 'click')
    {
        console.log("hghfd")
        const searchInput = searchBox.value;
        searchBox.value = '';
        loadPhones(searchInput); 
    }


}

searchButton.addEventListener('click',handleClickandEnter);
searchBox.addEventListener('keydown',handleClickandEnter);
// loadPhones()