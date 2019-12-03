// день основания 24 августа 1г. (вторник)
// 12 мес. по 30 дней (360 дней год)
// кратный пяти высокосный 31 день февраля (361 день)
// 100 200 300 400 600 700 800 900 не высокосные
// 500 1000 высокосные

dateCount(prompt('enter date pls DD.MM.YYYY', "24.08.1001"));

function dateCount(thisDay) {
    const dataDay = thisDay.split(".");
    const specifiedDay = +dataDay[0];
    const specifiedMonth = +dataDay[1];
    const specifiedYear = +dataDay[2];

    if (specifiedMonth > 12 || specifiedMonth < 1){
        alert("incorect data");
        return;
    };
    if (specifiedDay < 0 || specifiedDay > 31) {
        alert("incorect data");
        return;
    }
    if (specifiedDay == 31 && specifiedMonth != 2) {
        alert("incorect data");
        return;
    }
    if (specifiedDay == 31) {
        if (specifiedYear % 5) {
            alert("incorect data");
            return;
        }
        if (!(specifiedYear % 100)) {
            if (specifiedYear % 500) {
                alert("incorect data");
                return;
            };
        };
    };

    let quantityHighDay = specifiedYear / 5;
    quantityHighDay -= specifiedYear / 100;
    quantityHighDay += specifiedYear / 500;
    quantityHighDay = Math.floor(quantityHighDay);

    let quantityDay = specifiedYear * 360 + quantityHighDay;
    quantityDay += specifiedMonth * 30;
    quantityDay += specifiedDay;
    quantityDay = Math.floor(quantityDay);

    let day = 0;

    for (let i = 0; i < quantityDay; i++) {
        day++;

        if (day > 6) {
            day = 0;
        };
    };

    if (day === 0) {
        alert("Monday");
    } else if (day === 1) {
        alert("Tuesday")
    } else if (day === 2) {
        alert("Wednesday")
    } else if (day === 3) {
        alert("Thursday")
    } else if (day === 4) {
        alert("Friday")
    } else if (day === 5) {
        alert("Saturday")
    } else if (day === 6) {
        alert("Sunday")
    };
};
