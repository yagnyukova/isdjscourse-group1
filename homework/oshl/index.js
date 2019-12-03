(function(){
    const submit = document.getElementById('form');
    submit.addEventListener('submit', function(e){
        e.preventDefault();
        let message = document.getElementById('input');
        if (message.value.length > 0){
            document.getElementById('message').textContent = message.value;
            message.value = '';
        }
        else{
            let error = document.querySelector('.error');
            error.classList.add('show');
            setTimeout(function(){
                error.classList.remove('show');
            }, 2000);
        }
    });

    // Counter
    let counterValue = 0;
    const buttons = document.querySelectorAll(".counterBtn");
    const counter = document.getElementById("counter");
    buttons.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            const value = event.target;
            if (value.classList.contains("prevBtn")) {
                counterValue--;
            } else if (value.classList.contains("nextBtn")) {
                counterValue++;
            }
            counter.textContent = counterValue;
            // change color
            if (counterValue === 0) {
                counter.style.color = "#333333";
            } else if (counterValue < 0) {
                counter.style.color = "#F6511D";
            } else if (counterValue > 0) {
                counter.style.color = "#7fb800";
            }
        });
    });
})();

