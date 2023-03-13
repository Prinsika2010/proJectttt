function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifer = ml5.soundClassifier('http://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json' , modelReady);
}

function modelReady(){
    classifer.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.groupCollapsed(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" +random_number_r+ " , " +random_number_g+ " , " +random_number_b+ ")";
        document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+ " , " +random_number_g+ " , " +random_number_b+ ")";

        img = document.getElementById('alien1');
        img = document.getElementById('alien2');
        img = document.getElementById('alien3');
        img = document.getElementById('alien4');

        if (results[0].label == "Clap")
        {
            img.src = 'alien-01.gif';
            img1.src = 'alien-02.png';
            img2.src = 'alien-03.png';
            img3.src = 'alien-04.png';
        }

        else if (results[0].label == "Bell")
        {
            img.src = 'alien-01.png';
            img1.src = 'alien-02.gif';
            img2.src = 'alien-03.png';
            img3.src = 'alien-04.png';
        }

        else if (results[0].label == "Snapping")
        {
            img.src = 'alien-01.png';
            img1.src = 'alien-02.png';
            img2.src = 'alien-03.gif';
            img3.src = 'alien-04.png';
        }

        else
        {
            img.src = 'alien-01.png';
            img1.src = 'alien-02.png';
            img2.src = 'alien-03.png';
            img3.src = 'alien-04.gif';
        }
    }
}