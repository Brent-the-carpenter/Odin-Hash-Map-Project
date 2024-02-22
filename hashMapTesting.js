const HashMap = require("./hash-map-class");

const Map1 = new HashMap();

Map1.set("bob", "Hello");
Map1.set("Quartz", "Kittizen");
console.log(Map1.get("bob"));
console.log(Map1.get("Quartz"));
console.log(Map1.length());
console.log(Map1.remove("bob"));
console.log(Map1.length());
console.log(Map1.has("Quartz"));
Map1.clear();
Map1.set("luna", "Socks");
Map1.set("Quartz", "mittizzen");
console.log(Map1.values());
console.log(Map1.keys());
console.log(Map1.entries());
