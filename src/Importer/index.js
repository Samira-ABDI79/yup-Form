
function Importer(r) {
    let images = {};
    r.keys().map((item) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }
  
  const images = Importer(
    require.context("../../public/icons/", true, /\.(png|jpe?g|svg|jpg)$/)
  );
  export default images;