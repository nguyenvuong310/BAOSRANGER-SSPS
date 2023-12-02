import HeaderStudent from "./HeaderStudent";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import FolderCard from "../../components/StudentFolderCard"
import StudentFolderCard from "../../components/StudentFolderCard";
import FolderImg from "../../assets/folderimg.png";
import PagiBar from "../../components/PaginationBar"
import { getUserInfo, getListCourse } from "../../service/userService";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
import StudentProfile from "./StudentProfile";
import PublicStorage from "./PublicStorage";
import PrivateStorage from "./PrivateStorage";
import PrintingPage from "./PrintingPage";
import FolderView from "./FolderView";
const HomePageStudent = () => {
  const [userinfo, setUserinfo] = useState({})
  const [check, setCheck] = useState(1);
  const [searchlocation, setSearchlocation] = useState(1)
  const [content, setContent] = useState("")
  const [uploaded, setUploaded] = useState(false)
  useEffect(() => {
    const test = async () => {
      try {
        const data = await getUserInfo();
        setUserinfo(data.data.user)
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    test()
  }, []);

  const handleOnChangeCheck = (data) => {
    setCheck(() => data)
  }
  const handleOnChangeSearchLocation = (data) => {
    setSearchlocation(() => data)
  }
  const handleChangeContent = (data) => {
    setContent(() => data)
  }
  const handleChangeUpload = (data) => {
    setUploaded(() => data)
  }
  return (
    <>
      <HeaderStudent input={handleOnChangeCheck} value={check}
        inputsearch={handleOnChangeSearchLocation} search={searchlocation}
        inputcontent={handleChangeContent} content={content}
        inputupload={handleChangeUpload} upload={uploaded} />
      {check == 1 && <PublicStorage input={handleOnChangeCheck} value={check} />}
      {check == 2 && <PrivateStorage
        user={userinfo} check={check}
        search={searchlocation} inputsearch={handleOnChangeSearchLocation}
        content={content}
        inputupload={handleChangeUpload} upload={uploaded} />}
      {check == 3 && <StudentProfile />}
      {check == 5 && <FolderView inputsearch={handleOnChangeSearchLocation} search={searchlocation} />}
    </>
  );
};
export default HomePageStudent;
