import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "reactstrap";
import AppHeader from "./AppHeader/AppHeader";
import AppContent from "./AppContent/AppContent";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const App = () => {
  function ErrorFallback({ error }) {
    return (
      <div role="alert" className="error-wrapper">
        <p className="error-message">Ooops, something went wrong...</p>
        <Button
          onClick={() => window.location.reload()}
          className="custom-btn"
          size="sm"
        >
          Try again
        </Button>
      </div>
    );
  }
  return (
    <>
      <AppHeader />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppContent />
      </ErrorBoundary>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
