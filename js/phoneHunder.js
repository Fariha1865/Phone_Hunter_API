let isShowAll = false;
const showAllButton = document.getElementById('showAll');
const searchButton = document.getElementById('btnSearch');
const searchBox = document.getElementById('searchBox');
let searchInput = '';



const loadPhones = async(phoneName) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
    const res = await fetch(url);
    const data = await res.json();

    showDataInCard(data.data);
}

function showDataInCard(data){

    const cardHolder = document.getElementById('card_container');
    cardHolder.textContent = '';


    console.log(data);
    console.log(data.length);

    if(parseInt(data.length) > 12 && isShowAll===false)
    {
        
        data = data.slice(0,12);
        showAllButton.classList.remove('hidden');
        
        
    }else{
        console.log("reload")
        showAllButton.classList.add('hidden');
        isShowAll=false;
        
    }


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
    };

    ToggleSpinner(false);
}

function handleClickandEnter(event){

    if(event.key === 'Enter' ||  event.type === 'click')
    {
        ToggleSpinner(true);
        console.log("hghfd")
        searchInput = searchBox.value;
        searchBox.value = '';
        loadPhones(searchInput); 
    }


}

searchButton.addEventListener('click',handleClickandEnter);
searchBox.addEventListener('keydown',handleClickandEnter);
// loadPhones()

function ToggleSpinner(isLoading){

    if(isLoading)
    {
        document.getElementById('spinner').classList.remove('hidden');
    }else{
        document.getElementById('spinner').classList.add('hidden');
    }
}

showAllButton.addEventListener('click',function(){

    isShowAll=true;
    loadPhones(searchInput);
     
})