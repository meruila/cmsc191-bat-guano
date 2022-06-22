let toPass = [
    { name: "Proteobacteria", data: [0.605, 0.574]},
    { name: "Planctomycetes", data: [0.017, 0.006]}, 
    { name: "Others", data: [0.05, 0]},
    { name: "Firmicutes", data: [0.024, 0.006]},
    { name: "Bacteroidetes", data: [0.068, 0.011]},
    { name: "Actinobacteria", data: [0.236, 0.395]},
    { name: "Acidobacteria", data: [0, 0.008]}
]

exports.getData = (data) => {
    global.levels = formatData(data);
}

const formatData = (bacteria) => {
    let data = []
    for (let i in bacteria) {
        let obj = {
            x: ['C1', 'C2'],
            y: bacteria[i].data,
            name: bacteria[i].name,
            type: 'bar'
        }
        data.push(obj);
    }
    
    return data;
}

// let formattedData = formatData(levels);
exports.fData = formatData(toPass);
// console.log(formattedData)