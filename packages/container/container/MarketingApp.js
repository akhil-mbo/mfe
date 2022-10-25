import React from 'react';
import { mountMarketing } from 'marketing';
import { useRef } from "react";
import { useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mountMarketing(ref.current);
  }, []);

  return (
    <div ref={ref} />
  );
};

export default MarketingApp;