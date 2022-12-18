function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

  document.getElementById("age").innerText = calculate_age(new Date(2002, 9, 27)) + " Years Old";
