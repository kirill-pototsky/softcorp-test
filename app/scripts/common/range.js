/* eslint-disable */
export default () => {
  const range = document.getElementById('range');
  const indicator = document.getElementById('indicator');
  var isIE = /*@cc_on!@*/false || !!document.documentMode;

  if (!range) return;

  if (isIE) {
    range.onchange = () => {
      let procent = range.value;

      indicator.innerHTML = Math.round(+procent) + '%';
    };
  } else {
    range.oninput = () => {
      let procent = range.value;

      indicator.innerHTML = Math.round(+procent) + '%';
    };
  }
};

/* eslint-enable */
