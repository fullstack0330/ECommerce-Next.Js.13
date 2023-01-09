"use client";

import { useState } from "react";
import OrderHistorySection from "../../components/sections/UserSection/OrderHistorySection";
import ProfileSection from "../../components/sections/UserSection/ProfileSection";
import UserDangerSection from "../../components/sections/UserSection/UserDangerSection";
import UserTabs from "../../components/UserTabs";

const ProfilePage = () => {
  const [tab, setTab] = useState(0);

  const CurrentDisplay = () => {
    switch (tab) {
      case 0:
        return <ProfileSection />;
      case 1:
        return <OrderHistorySection />;
      case 2:
        return <UserDangerSection />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <UserTabs tab={tab} setTab={setTab} />
      <CurrentDisplay />
    </>
  );
};

export default ProfilePage;
