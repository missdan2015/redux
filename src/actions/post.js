import { getPost } from '../services/post_api';

const postAction = async (dispatch) => {
    const res = await getPost();
    dispatch({
        type: 'load_post',
        payload: res.data
    })
}
export { postAction }
