import useScript from '../../hooks/useScript';

const jqueryCdn =
  'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';

const ScriptComponent = () => {
  const { loading, error } = useScript(jqueryCdn);

  if (loading) return <div>...lading</div>;
  if (error) return <div>Error</div>;
  return <h1>{window.$(window).width()}</h1>;
};

export default ScriptComponent;
