import React from "react";
import Responsive from "react-responsive";

export const Desktop = props => <Responsive {...props} minWidth={1200} />;
export const Tablet = props => (
  <Responsive {...props} minWidth={768} maxWidth={1023} />
);
export const Mobile = props => <Responsive {...props} maxWidth={767} />;
