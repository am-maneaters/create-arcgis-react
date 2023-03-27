import { useEffect, useState } from 'react';
import viteLogo from '/vite.svg';
import { CalciteShell } from '@esri/calcite-components-react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

function App() {
  const [mapView, setMapView] = useState<MapView | null>(null);

  useEffect(() => {
    const map = new Map({
      basemap: 'dark-gray-vector',
    });

    const view = new MapView({
      map,
      container: 'map',
      center: [-92.1005, 46.7867],
      zoom: 12,
    });

    setMapView(view);
  }, []);

  return (
    <CalciteShell className="calcite-mode-dark">
      <div id="map" className="absolute inset-0" />
    </CalciteShell>
  );
}

export default App;
