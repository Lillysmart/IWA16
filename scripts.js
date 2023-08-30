
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  /**
   * represents the 2 athlete's info in HTML
   * 
   * @param {} athlete the athelete object with information
   * @returns A documentFragment with the new HTML
   */
  const createHtml = (athlete) => { 
    const latestTime =athlete.races[athlete.races.length-1].time;
    const latestDate= athlete.races[athlete.races.length-1].date

     const fragment = document.createDocumentFragment();
    const title = document.createElement('h2');
    title.textContent=athlete.id
    fragment.appendChild(title);

    /*creating a Date object from a string , use .getDate &
    .getFullYear method to get the values of the methods */

    const day = new Date (latestDate).getDate()
    /**
     * gets the corresponding index to MONTHS array.
     */
    const month = MONTHS[new Date (latestDate).getMonth()];
    const year = new Date (latestDate).getFullYear();

    const [first, second , third , forth] = latestTime //destructuring
    const minutes= first + second+ third + forth  
    const hours = Math.floor(minutes / 60);
    

    const list = document.createElement('dl');

    list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${athlete.firstName} ${athlete.surname}</dd>

      <dt>Total Races</dt>
      <dd>${athlete.races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.toString().padStart(2,"0")}:${minutes}</dd>
    `;
  
    fragment.appendChild(list);
    return fragment
  }
  // use destructuring to get substitute for the parameter(athlete)
  const {NM372,SV782} = data.response.data 

  document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
  document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));
   