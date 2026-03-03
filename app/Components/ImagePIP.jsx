export default function ImagePIP() {
  return (
        <div id="img-preview" className="img-preview hidden" aria-hidden="true">
            <div className="img-preview-overlay"></div>
            <div className="img-preview-content">
                <button className="close-preview" aria-label="Close image preview">
                    <p className="mb-1">&times;</p>
                </button>
                <img src={null} alt="Preview" id="preview-img" width="500" height="500" />
            </div>
        </div>
    )
}
