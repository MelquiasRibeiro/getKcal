const form = document.getElementById("form");

form.addEventListener('submit',handleSubmmit);

function handleSubmmit(e){
    e.preventDefault();

    const age =  getIputNumber("age");
    const weight =  getIputNumber("weight");
    const height =  getIputNumber("height");
    const gender =  getselectedValue("gender");
    const activity_level = getIputNumber("activity_level")
 
    const tmb = Math.round( 
        gender ==='famele'
        ?((655+9.6*weight)+(1.8*height)-(4.7*age ))
        :
        (66+(13.7*weight)+(5*height)-(6.8*age ))
    );

    const maintemance = Math.round(tmb * Number(activity_level))

    const loseWeight=maintemance -450;
    const gainWeight=maintemance +450;

    const layout =`
    <h2>Aqui está o resultado:</h2>

        <div class="result-content">
        
            <ul>
                <li>
                Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
                </li>
                <li>
                Para manter o seu peso você precisa consumir em média <strong>${maintemance} calorias</strong>.
                </li>
                <li>
                Para perder peso você precisa consumir em média <strong>${loseWeight}  calorias</strong>.
                </li>
                <li>
                Para ganhar peso você precisa consumir em média <strong>${gainWeight }calorias</strong>.
                </li>
            </ul> 
        </div>
    `;

    const result =document.getElementById('result')
    
    result.innerHTML =layout;
}

function getselectedValue(id){

    const selected=  document.getElementById(id);   

    return selected.options[selected.selectedIndex].value;
}

function getIputNumber(id){
    
    return Number(document.getElementById(id).value);
} 