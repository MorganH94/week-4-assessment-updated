let fortuneArray = ['A beautiful, smart, and loving person will be coming into your life', 'A dubious friend may be an enemy in camouflage', 'A faithful friend is a strong defense', 'A feather inthe hand is better than a bird in the air', 'A fresh start will put you on your way']

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortunes: (req, res) => {

        fortunes = ['A beautiful, smart, and loving person will be coming into your life', 'A dubious friend may be an enemy in camouflage', 'A faithful friend is a strong defense', 'A feather inthe hand is better than a bird in the air', 'A fresh start will put you on your way'];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
},

    getFortune: (req, res) => {
        res.status(200).send(fortuneArray)
    },

    addFortune: (req, res) => {
        let {fortune} = req.body

        console.log(fortune)

        fortuneArray.push(fortune)

        res.status(200).send(fortuneArray)
    },

    deleteFortune: (req, res) => {
        let index = req.params.id - 1

        fortuneArray.splice(index, 1)

        res.status(200).send(fortuneArray)
    }

}



