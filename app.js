const routerSenderConfig = { serverId: 8003, active: true };

const routerSenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_8003() {
    return routerSenderConfig.active ? "OK" : "ERR";
}

console.log("Module routerSender loaded successfully.");