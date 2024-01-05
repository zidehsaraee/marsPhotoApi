import './MarsPhoto.css'

const MarsPhoto = ({ photo }) => {
  return (
    <div className="MarsPhoto">
      <img src={photo.img_src} />
    </div>
  );
};

export default MarsPhoto;
