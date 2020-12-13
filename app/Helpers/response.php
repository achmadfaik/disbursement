<?php
if (! function_exists('sendApiResponse')) {
    /**
     * @param bool $status
     * @param string $message
     * @param null $data
     * @param int $code
     * @param null $error
     * @return \Illuminate\Http\JsonResponse
     */
    function sendApiResponse($status = true, $message = '', $data = null, $code = null)
    {
        $data = [
            'error' => !$status,
            'message' => $message,
            'data' => $data
        ];
        $code = (!$status && !$code) ? 400 : 200;
        return response()->json($data, $code);
    }
}

if (! function_exists('formatErrors')) {
    /**
     * @param $errors
     * @return array
     */
    function formatErrors($errors) {
        $transformed = [];
        foreach ($errors as $field => $messages) {
            $transformed[$field] = $messages[0];
        }
        return $transformed;
    }

}
