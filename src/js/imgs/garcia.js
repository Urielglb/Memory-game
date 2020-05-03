import firstPhoto from '../../assets/imgs/garcia/1.png';
import secondPhoto from '../../assets/imgs/garcia/2.png';
import thirdPhoto from '../../assets/imgs/garcia/3.png';
import fourthPhoto from '../../assets/imgs/garcia/4.png';
import fifthPhoto from '../../assets/imgs/garcia/5.png';
import sixthPhoto from '../../assets/imgs/garcia/6.png';
import seventhPhoto from '../../assets/imgs/garcia/7.png';


function mixedImgs(imgs){
    let usedNumbers = {};
    let mixedImgs = [];
    for (let i = 0; i < (imgs.length)*2; i++) {
        let index = Math.floor(Math.random() * (imgs.length));
        while (usedNumbers[index]===2) {
              index = Math.floor(Math.random() * (imgs.length));
        }
        if(usedNumbers[index]){
            usedNumbers[index] = 2;
        }else{
          usedNumbers[index] = 1;
        }
        mixedImgs.push(imgs[index]);
    }
    return mixedImgs
}

let imgs =[
    {
        "src" : firstPhoto,
        "id": "first"
    },
    {
        "src" : secondPhoto,
        "id": "second"
    },
    {
        "src" : thirdPhoto,
        "id": "third"
    },
    {
        "src" : fourthPhoto,
        "id": "fourth"
    },
    {
        "src" : fifthPhoto,
        "id": "fifth"
    },
    {
        "src" : sixthPhoto,
        "id": "sixth"
    },
    {
        "src" : seventhPhoto,
        "id": "seventh"
    },
]

imgs = mixedImgs(imgs)

export default imgs;