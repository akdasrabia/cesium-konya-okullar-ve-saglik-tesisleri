Cesium.Ion.defaultAccessToken = "your cesium token";

const visor = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: Cesium.createWorldImagery({
    style: Cesium.IonWorldImageryStyle.AERIAL,
  }),
});

visor.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(
    32.478167,
    37.948239,
    1000
  ),
  material: Cesium.Color.RED.withAlpha(0.5),
  outline: true,
  outlineColor: Cesium.Color.BLACK,
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-90, 0),
  },
});





visor.dataSources.add(
  Cesium.GeoJsonDataSource.load("assets/okullar.geojson", {
    fill: Cesium.Color.BLUE,
  })
);



visor.dataSources.add(
    Cesium.GeoJsonDataSource.load("assets/saglikTesisleri.geojson", {
      fill: Cesium.Color.GREEN,
      stokeWidth: 3,
    })
  );
