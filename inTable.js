const showDataInTable = (data, prop) => {
    var html = '';

    if (prop === 'active') {
        for (let index = 0; index < 10; index++) {
            var countryCode = data[index].countryInfo.iso3;
            html += `
            <tr>
                <td><b>${data[index].country}</b></td>
                <td><span style="color: #AD0B39;">${numeral(data[index][prop]).format()}</span></td>
            </tr>
        `
        }
        document.getElementById('table-header').innerHTML = '<span style="color: #AD0B39;">Top 10 Active</span>';
    } else if (prop === 'recovered') {
        for (let index = 0; index < 10; index++) {
            html += `
            <tr>
                <td><b>${data[index].country}</b></td>
                <td><span style="color: #DD882C;">${numeral(data[index].recovered).format()}</span></td>
            </tr>
        `
        }
        document.getElementById('table-header').innerHTML = '<span style="color: #DD882C;">Top 10 Recovered</span>';
    } else {
        for (let index = 0; index < 10; index++) {
            html += `
            <tr>
                <td><b>${data[index].country}</b></td>
                <td><span class="text-secondary">${numeral(data[index].deaths).format()}</span></td>
            </tr>
        `
        }
        document.getElementById('table-header').innerHTML = '<span class="text-secondary">Top 10 Deaths</span>';
    }
    document.getElementById('table-data').innerHTML = html;
}
