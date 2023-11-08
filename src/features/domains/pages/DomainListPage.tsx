import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDomainQuery } from "../api/domainApi";
import DomainTable from "../components/DomainTable";
import AddDomainForm from "../components/AddDomainForm";
import "./DomainListPage.css";

const DomainListPage: React.FC = function () {
  const { data } = useDomainQuery();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <Header onAddBtnClick={handleOpen} />
        <DomainTable rows={data?.users} />
        <AddDomainForm opened={open} handleClose={handleClose} />
      </div>
    </main>
  );
};

export default DomainListPage;
