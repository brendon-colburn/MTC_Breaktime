Image(){
	If(IsBlank(AddMediaButton1.Media), SampleImage, AddMediaButton1.Media)
} // End of Image

ImagePosition(){
	ImagePosition.Fit
} // End of ImagePosition

ImageRotation(){
	ImageRotation.None
} // End of ImageRotation

X(){
	489
} // End of X

Y(){
	136
} // End of Y

Width(){
	877
} // End of Width

Height(){
	474
} // End of Height

Fill(){
	RGBA(0, 0, 0, 0)
} // End of Fill

DisabledFill(){
	RGBA(244, 244, 244, 1)
} // End of DisabledFill

PressedFill(){
	ColorFade(UploadedImage1.Fill, -20%)
} // End of PressedFill

HoverFill(){
	ColorFade(UploadedImage1.Fill, 20%)
} // End of HoverFill

BorderColor(){
	RGBA(0, 18, 107, 1)
} // End of BorderColor

DisabledBorderColor(){
	RGBA(166, 166, 166, 1)
} // End of DisabledBorderColor

PressedBorderColor(){
	ColorFade(UploadedImage1.BorderColor, -20%)
} // End of PressedBorderColor

HoverBorderColor(){
	ColorFade(UploadedImage1.BorderColor, 20%)
} // End of HoverBorderColor

FocusedBorderColor(){
	UploadedImage1.BorderColor
} // End of FocusedBorderColor

BorderStyle(){
	BorderStyle.Solid
} // End of BorderStyle

DisplayMode(){
	DisplayMode.Edit
} // End of DisplayMode

ZIndex(){
	AutoValue
} // End of ZIndex

RadiusTopLeft(){
	0
} // End of RadiusTopLeft

RadiusTopRight(){
	0
} // End of RadiusTopRight

RadiusBottomLeft(){
	0
} // End of RadiusBottomLeft

RadiusBottomRight(){
	0
} // End of RadiusBottomRight

BorderThickness(){
	0
} // End of BorderThickness

FocusedBorderThickness(){
	2
} // End of FocusedBorderThickness

PaddingTop(){
	0
} // End of PaddingTop

PaddingRight(){
	0
} // End of PaddingRight

PaddingBottom(){
	0
} // End of PaddingBottom

PaddingLeft(){
	0
} // End of PaddingLeft

Visible(){
	If(Radio1.SelectedText.Value ="Show Video",false,true
	)
} // End of Visible

