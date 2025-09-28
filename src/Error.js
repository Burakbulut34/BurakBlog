import React from "react";

class SilentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // hata olursa sadece state değiştir
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // ❌ konsola bile basmak istemiyorsan burayı boş bırak
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // ❌ ekrana hiçbir şey yansıtma
      return this.props.children; 
    }
    return this.props.children;
  }
}

export default SilentErrorBoundary;
