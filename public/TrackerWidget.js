fetch('https://crypto-tracker-rr98.onrender.com/')
    .then(response => response.text())
    .then(widgetHtml => {

      const container = document.createElement('div');
      const body = document.querySelector('body')
      body.appendChild(container)
      
      container.innerHTML = widgetHtml;

      executeScripts(container);  
      
    })
    .catch(error => {
      console.error('Error fetching widget.html:', error);
    });

    function executeScripts(container) {
      const scripts = container.querySelectorAll('script');
      
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        if (script.src) {
          newScript.src = script.src;
        } 
        else {
          const scriptContent = script.textContent;
          newScript.textContent = scriptContent;                  
        }

        container.appendChild(newScript);

        const gettingPriceRegex = /const\s+gettingPrice\s*=\s*\(([\s\S]*?)\)\s*=>\s*{([\s\S]*)}/;
        const match = newScript.textContent.match(gettingPriceRegex);
      
        if (match && match[1]) {
          const currencyParam = match[1].trim();
          const gettingPriceFunctionBody = match[2].trim();
          const gettingPriceFunction = new Function(currencyParam, gettingPriceFunctionBody);

          
          const currencyAttr = document.getElementById('CryptoTrackerWidget').getAttribute('currency');
          gettingPriceFunction(currencyAttr); 
        }      

        script.remove();
      });
    }
