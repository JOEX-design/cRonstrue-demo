var cronstrue = window.cronstrue;

function onTranslate() {
  var cronString = document.getElementById("cronString").value;
  console.log(window);

  var resultEN = cronstrue.toString(cronString, {
    verbose: true,
    use24HourTimeFormat: true
  })
  var resultCN = cronstrue.toString(cronString, {
    verbose: true,
    locale: "zh_CN",
    use24HourTimeFormat: true
  })
  var resultJA = cronstrue.toString(cronString, {
    verbose: true,
    locale: "ja",
    use24HourTimeFormat: true
  })
  var resultKO = cronstrue.toString(cronString, {
    verbose: true,
    locale: "ko",
    use24HourTimeFormat: true
  })

  document.getElementById("resultEN").innerHTML = resultEN
  document.getElementById("resultCN").innerHTML = resultCN
  document.getElementById("resultJA").innerHTML = resultJA
  document.getElementById("resultKO").innerHTML = resultKO
}
