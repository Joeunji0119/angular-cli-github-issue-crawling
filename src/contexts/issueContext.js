import React, { createContext, useState, useContext, useMemo } from "react";

export const IssueContext = createContext();
export const LoadingContext = createContext();
export const ErrorContext = createContext();

export const IssueProvider = ({ children }) => {
  const [issue, setIssue] = useState([]);
  const value = useMemo(() => [issue, setIssue], [issue]);

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
};

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const loadingValue = useMemo(() => [loading, setLoading], [loading]);

  return <LoadingContext.Provider value={loadingValue}>{children}</LoadingContext.Provider>;
};

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const errrorValue = useMemo(() => [error, setError], [error]);

  return <ErrorContext.Provider value={errrorValue}>{children}</ErrorContext.Provider>;
};

export const useIssue = () => useContext(IssueContext);
export const useLoading = () => useContext(LoadingContext);
export const useError = () => useContext(ErrorContext);
