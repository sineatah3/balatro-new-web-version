window.getSource = async function() {const b=new Uint8Array(await (await fetch("./source.zip")).arrayBuffer()).buffer;return b;}
