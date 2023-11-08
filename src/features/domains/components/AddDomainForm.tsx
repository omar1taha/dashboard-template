import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { Domain } from "../types";
import Grid from "@mui/system/Unstable_Grid";

import "./AddDomainForm.css";

export type AddDomainFormProps = {
  opened: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddDomainForm(props: AddDomainFormProps) {
  const { opened, handleClose } = props;
  const { register, handleSubmit } = useForm<Domain>();
  const onSubmit = (data: Domain) => {
    console.log(data);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={opened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid xs={9}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid xs={6}>
                    <div className="form-control">
                      <label>First Name</label>
                      <input
                        {...register("firstName")}
                        placeholder="Enter First Name"
                      />
                    </div>
                  </Grid>
                  <Grid xs={6}>
                    <div className="form-control">
                      <label>Last Name</label>
                      <input
                        {...register("lastName")}
                        placeholder="Enter Last Name"
                      />
                    </div>
                  </Grid>
                  <Grid xs={6}>
                    <div className="form-control">
                      <label>Company Name</label>
                      <input
                        {...register("companyName")}
                        placeholder="Enter Company Name"
                      />
                    </div>
                  </Grid>
                  <Grid xs={6}>
                    <div className="form-control">
                      <label>Email</label>
                      <input {...register("email")} placeholder="Enter Email" />
                    </div>
                  </Grid>
                  <Grid xs={12}>
                    <div className="form-control">
                      <label>Address Line 1</label>
                      <input
                        {...register("addressLine1")}
                        placeholder="Enter Address Line 1"
                      />
                    </div>
                  </Grid>
                  <Grid xs={12}>
                    <div className="form-control">
                      <label>Address Line 2</label>
                      <input
                        {...register("addressLine2")}
                        placeholder="Enter Address Line 2"
                      />
                    </div>
                  </Grid>
                  <Grid xs={6}>
                    <div className="form-control">
                      <label>City</label>
                      <input {...register("city")} placeholder="Enter City" />
                    </div>
                  </Grid>
                  <Grid xs={6}>
                    <div className="form-control">
                      <label>State</label>
                      <input {...register("state")} placeholder="Enter State" />
                    </div>
                  </Grid>
                  <Grid xs={6}>
                    <div className="form-control">
                      <label>Zip Code</label>
                      <input
                        {...register("zipCode")}
                        placeholder="Enter Zip Code"
                      />
                    </div>
                  </Grid>
                  <Grid xs={6}>
                    <div className="form-control">
                      <label>Phone Number</label>
                      <input
                        {...register("phoneNo")}
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </Grid>
                  <Grid xs={12}>
                    <button className="successBtn">Buy Now</button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid xs={3}>
              <div className="details">Some Content</div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
