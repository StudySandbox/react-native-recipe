import { useAuth } from "@clerk/clerk-expo";
import { Href, Redirect, Stack } from "expo-router";

const TabsLayout = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/sign-in" as Href} />;
  }

  return <Stack />;
};

export default TabsLayout;
