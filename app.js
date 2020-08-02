
/*This function is to be run on document load to start application processing */
const apiKey = 'L5p6QF5bMtlSvf8OC373b45lMiBQSXp6sBgcqBEC';
const defaultURL = 'https://developer.nps.gov/api/v1/parks';


function getSelectedStated(states, maxResults = 10) {
  console.log(states, maxResults);

  const url = `${defaultURL}?stateCode=${states}&limit=${maxResults}&api_key=${apiKey}`;

  console.log(url);

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(data => displayResults(data))
    .catch(error => alert(`Something went wrong. Try again later.${error.message}`));

}

function displayResults(results) {

  console.log(results);
  $('.resultsList').empty();
  for (let i = 0; i < results.data.length; i++) {
    $('.resultsList').append(
      `<li><h3>${results.data[i].fullName}</h3>
       <p>${results.data[i].description}</p>
       <a href ="${results.data[i].url}">Visit Website</a></li>`);
  }
}

/*TEMPLATE GENERATION FUNCTIONS*/
function getSearchHtmlView() {
  const htmlString = getSearchHtmlString();
  return htmlString;
}

/*INITIAL RENDER FUNCTION*/
function render(html) {
  $('main').html(html);
}



/*TEMPLATE FUNCTIONS*/
function getSearchHtmlString() {
  return `
  <form for="stateSelection">
  <label for="states">Choose a state:</label>
  
  <input type="submit" id="submitStates">
  
  <label for="max-results">Maximum results to return</label>
  <input type="number" name="max-results" id="maxResults" value="10">
  <br>
  <span>
  <input type="checkbox" id="AL" name="AL" value="AL" />
  <label for="AL">Alabama</label>
  
  <input type="checkbox" id="AK" name="AK" value="AK" />
  <label for="">Alaska</label>
  
  <input type="checkbox" id="AZ" name="AZ" value="AZ" />
  <label for="">Arizona</label>
  
  <input type="checkbox" id="AR" name="AR" value="AR" />
  <label for="">Arkansa</label>
  
  <input type="checkbox" id="CA" name="CA" value="CA" />
  <label for="">California</label><br>
  </span>
  <br>
  <span>
  <input type="checkbox" id="CO" name="CO" value="CO" />
  <label for="">Colorado</label>
  
  <input type="checkbox" id="CT" name="CT" value="CT" />
  <label for="">Connecticut</label>
  
  <input type="checkbox" id="DE" name="DE" value="DE" />
  <label for="">Delaware</label>
  
  <input type="checkbox" id="FL" name="FL" value="FL" />
  <label for="">Florida</label>
  
  <input type="checkbox" id="GA" name="GA" value="GA" />
  <label for="">Georgia</label><br>
  </span>
  <br>
  <span>
  <input type="checkbox" id="HI" name="HI" value="HI" />
  <label for="">Hawaii</label>
  
  <input type="checkbox" id="ID" name="ID" value="ID" />
  <label for="">Idaho</label>
  
  <input type="checkbox" id="IL" name="IL" value="IL" />
  <label for="">Illinois</label>
  
  <input type="checkbox" id="IN" name="IN" value="IN" />
  <label for="">Indiana</label>
  
  <input type="checkbox" id="IA" name="IA" value="IA" />
  <label for="">Iowa</label>
  </span>
  <br>
  <span>
  <input type="checkbox" id="KS" name="KS" value="KS" />
  <label for="">Kansas</label>
  
  <input type="checkbox" id="KY" name="KY" value="KY" />
  <label for="">Kentucky</label>
  
  <input type="checkbox" id="LA" name="LA" value="LA" />
  <label for="">Louisiana</label>
  
  <input type="checkbox" id="ME" name="ME" value="ME" />
  <label for="">Maine</label>
  
  <input type="checkbox" id="MD" name="MD" value="MD" />
  <label for="">Maryland</label>
  </span>
  <br>
  <span>
  <input type="checkbox" id="MA" name="MA" value="MA" />
  <label for="">Massachusetts</label>
  
  <input type="checkbox" id="MI" name="MI" value="MI" />
  <label for="">Michigan</label>
  
  <input type="checkbox" id="MN" name="MN" value="MN" />
  <label for="">Minnesota</label>
  
  <input type="checkbox" id="MS" name="MS" value="MS" />
  <label for="">Mississippi</label>
  
  <input type="checkbox" id="MO" name="MO" value="MO" />
  <label for="">Missouri</label>
  </span>
  <br>
  <span>
  <input type="checkbox" id="MT" name="MT" value="MT" />
  <label for="">Montana</label>
  
  <input type="checkbox" id="NE" name="NE" value="NE" />
  <label for="">Nebraska</label>
  
  <input type="checkbox" id="NV" name="NV" value="NV" />
  <label for="">Nevada</label>
  
  <input type="checkbox" id="NH" name="NH" value="NH" />
  <label for="">New Hempshire</label>
  
  <input type="checkbox" id="NJ" name="NJ" value="NJ" />
  <label for="">New Jersey</label>
  </span>
  <br>
  <span>
  <input type="checkbox" id="NM" name="NM" value="NM" />
  <label for="">New Mexico</label>
  
  <input type="checkbox" id="NY" name="NY" value="NY" />
  <label for="">New York</label>
  
  <input type="checkbox" id="NC" name="NC" value="NC" />
  <label for="">North Carolina</label>
  
  <input type="checkbox" id="ND" name="ND" value="ND" />
  <label for="">North Dakota</label>
  
  <input type="checkbox" id="OH" name="OH" value="OH" />
  <label for="">Ohio</label>
  </span>
  <br>
  <span>
  <input type="checkbox" id="OK" name="OK" value="OK" />
  <label for="">Oklahoma</label>
  
  <input type="checkbox" id="OR" name="OR" value="OR" />
  <label for="">Oregon</label>
  
  <input type="checkbox" id="PA" name="PA" value="PA" />
  <label for="">Pennsylvania</label>
  
  <input type="checkbox" id="RI" name="RI" value="RI" />
  <label for="">Rhode Island</label>
  
  <input type="checkbox" id="SC" name="SC" value="SC" />
  <label for="">South Carolina</label>
  </span>
  <br>
  <span>
  <input type="checkbox" id="SD" name="SD" value="SD" />
  <label for="">South Dakota</label>
  
  <input type="checkbox" id="TN" name="TN" value="TN" />
  <label for="">Tennessee</label>
  
  <input type="checkbox" id="TX" name="TX" value="TX" />
  <label for="">Texas</label>
  
  <input type="checkbox" id="UT" name="UT" value="UT" />
  <label for="">Utah</label>
  
  <input type="checkbox" id="VT" name="VT" value="VT" />
  <label for="">Vermont</label>
  </span>
  <br>
  <span>
  <input type="checkbox" id="VA" name="VA" value="VA" />
  <label for="">Virginia</label>
  
  <input type="checkbox" id="WA" name="WA" value="WA" />
  <label for="">Washington</label>
  
  <input type="checkbox" id="WV" name="WV" value="WV" />
  <label for="">West Virginia</label>
  
  <input type="checkbox" id="WI" name="WI" value="WI" />
  <label for="">Wisconsion</label>
  
  <input type="checkbox" id="WY" name="WY" value="WY" />
  <label for="">Wyoming</label>
  </span>
  
  </form>
  
  <section class='results'>
  <ul class='resultsList'>
  </ul>  
   </section> `;
}

function watchForm() {
  $('body').on('submit', event => {
    event.preventDefault();
    const searchStates = $('input[type=checkbox]:checked').map(function (_, el) {
      return $(el).val();
    }).get();
    const maxResults = $('#maxResults').val();
    getSelectedStated(searchStates, maxResults);
  });
  render(getSearchHtmlView());

}

/*********************************************/
//Run main() on load
$(watchForm);

