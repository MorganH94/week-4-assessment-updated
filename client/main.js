console.log("I'm a fortune teller!")

let baseURL = 'http://localhost:4000'


let getFortuneBtn = document.querySelector('#getFortune')
let fortuneDiv = document.querySelector('#fortuneDisplay')
let addFortuneBtn = document.querySelector('#addButton')
let fortuneInput = document.querySelector('#newFortune')
let deleteBtn = document.querySelector('#deleteButton')
let deleteInput = document.querySelector('#fortuneId')

const fortuneBtn = document.getElementById("fortuneButton")

const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortunes = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {

    fortuneDiv.innerHTML = ''

    axios.get(`${baseURL}/fortunes`)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                fortuneDiv.appendChild(newSpan)
                }
            })
        .catch((err) => {
            console.log(err)
        });
};

const addFortune = () => {
    fortuneDiv.innerHTML = ''

    let bodyObj = {
        fortune: fortuneInput.value
    }

    axios.post(`${baseURL}/fortunes`, bodyObj)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                fortuneDiv.appendChild(newSpan)
                }
            })
        .catch((err) => {
            console.log(err)
        });
};

const deleteFortune = () => {
    fortuneDiv.innerHTML = ''

    let idToDelete = deleteInput.value

    axios.delete(`${baseURL}/fortunes/${idToDelete}`)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                fortuneDiv.appendChild(newSpan)
            }
        })
        .catch((err) => {
            console.log(err)
        });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortunes)
getFortuneBtn.addEventListener('click', getFortune)
addFortuneBtn.addEventListener('click', addFortune)
deleteBtn.addEventListener('click', deleteFortune)



// getAllFortunes()
