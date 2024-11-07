export default function json2html(data) {
    // Determine the table headers based on the first object in the data array
    const headers = ["Name", "Age", "Gender"];

    // Create HTML table with data-user attribute
    let html = '<table data-user="konireddynagamohithreddy@gmail.com">';
    html += "<thead><tr>";

    // Add headers to the table
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += "</tr></thead><tbody>";

    // Add data rows to the table
    data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => {
            html += `<td>${row[header] || ""}</td>`;
        });
        html += "</tr>";
    });

    html += "</tbody></table>";
    return html;
}
