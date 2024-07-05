"use client";

import { changeSidebarMode } from "@/redux/slice";
import { userData } from "@/utils/sidebar";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Wrapper = () => {
  const theme = useTheme();
  const match = useMediaQuery("(max-width:800px)");
  const sidebar = useSelector((data) => data.isSidebarOpen);
  const router = useRouter();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
      }}
    >
      {/* SIDEBAR */}
      <Drawer
        variant={match ? "temporary" : "permanent"}
        open={sidebar}
        onClose={() => dispatch(changeSidebarMode(!sidebar))}
      >
        <Stack
          direction={"column"}
          spacing={1}
          width={250}
          sx={{
            bgcolor: theme.palette.mainAccent[300],
            height: "100%",
          }}
        >
          <Divider />
          <List>
            {userData.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => router.push(item.link)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Drawer>
      <Stack
        direction={"column"}
        spacing={1}
        sx={{
          height: "100%",
          minHeight: "100vh",
          overflowX: "hidden",
          ml: match ? "0px" : "250px",
        }}
      >
        {/* Header */}

        {/* Main Body */}

        {/* Footer */}
      </Stack>
    </Box>
  );
};

export default Wrapper;
